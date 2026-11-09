const WHATSAPP = "6285119541842"; // demo: WA Business Tamakarsa Dev, ganti per client

// mobile menu
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu");
const setMenu = (open) => {
  menu.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
};
toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));

// booking -> WhatsApp
const form = document.querySelector("#booking");
const total = form.querySelector(".total");
const today = new Date().toISOString().slice(0, 10);
form.checkin.min = today;

// whole days between two yyyy-mm-dd strings; compared in UTC so DST can't skew it
const nightsBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 86400000);

function quote() {
  const { room, checkin, checkout } = form;
  if (!checkin.value || !checkout.value) return null;
  const nights = nightsBetween(checkin.value, checkout.value);
  if (nights < 1) return { error: "Check-out must be after check-in." };
  const rate = Number(room.selectedOptions[0].dataset.price);
  return { nights, sum: nights * rate };
}

function render() {
  const q = quote();
  total.classList.toggle("error", !!q?.error);
  total.textContent = !q
    ? "Pick your dates to see the total."
    : q.error || `${q.nights} night${q.nights > 1 ? "s" : ""} = $${q.sum}`;
}

form.addEventListener("input", () => {
  if (form.checkin.value) form.checkout.min = form.checkin.value;
  render();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = quote();
  if (!form.reportValidity() || !q || q.error) return render();
  const text =
    `Hi Arunika, I'd like to book the ${form.room.value} ` +
    `from ${form.checkin.value} to ${form.checkout.value} ` +
    `(${q.nights} nights, $${q.sum}) for ${form.guests.value} guest(s). ` +
    `Name: ${form.name.value.trim()}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

// scroll reveal
const targets = document.querySelectorAll(".card, .statement, .amenities, .review, .location, .map, details, .booking");
targets.forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    }),
  { threshold: 0.12 }
);
targets.forEach((el) => io.observe(el));
