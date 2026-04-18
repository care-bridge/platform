# CareBridge 💚

> *Healthcare for everyone — online, offline, or in need*

![Cover Image](cover.png)

---

## 🎯 What Is CareBridge?

A **donation platform** connecting patients in need, verified hospitals, and donors worldwide.

**How it works:**

1. Hospital treats patient for **free** 🆓
2. Hospital uploads bill (medicine names + cost + hospital stamp) — **no patient photos or names**
3. Donation request goes public 🌐
4. Donor pays hospital directly 💲
5. Patient gets healthy ✅

**No money? No problem. No privacy violation? Guaranteed.**

---

## 📚 Documentation

For **detailed scenarios** (patient direct, hospital flow, donor verification), see:  
👉 [docs/How-It-Works.md](docs/How-It-Works.md)

---

## 🧱 Tech Stack

| Layer | Technology |
| :--- | :--- |
| Frontend | HTMX + Pico.css + JS |
| Backend | Python + Flask + SQLite |
| Deployment | Anywhere (Render, PythonAnywhere, VPS) |

> No build step. No complex tooling. Works on low-end devices.

---

## 💻 Run Locally

1. Make sure you have **Python 3.11+** installed
2. Download the code
3. Go to project directory and run:  
   `python make.py init`  
   *This creates a virtual environment 
4. Activate the virtual environment *(the last command tells you how when done!)*
5. Install modules: `python make.py setup`
6. Then run: `python make.py run`
7. Open your browser and visit: `http://localhost:5000/`

**Voilà! ⚡**

---

## 📁 Project Structure

```
CareBridge/
├── app/
│ ├── routes/ # Flask routes
│ ├── templates/ # HTML + Alpine.js
│ ├── models.py # SQLite database
│ └── __init__.py
├── static/
│ └── css/ # Pico.css + custom
├── docs/
│ └── How-It-Works.md # Detailed scenarios
├── make.py # CLI helper
├── requirements.txt
└── README.md
```

---

## 🤝 Contributing

We're hackathon-mode 🚀 — all help welcome!

See 👉 [Contributing](docs/CONTRIBUTING.md) for more details  

---

## 🌐 Related

- [UNSDG 3 — Good Health & Well-being](https://www.un.org/sustainabledevelopment/health/)

---

## 📄 License

MIT — Build. Help. Ship.

---

**Built with ❤️ for** [GNEC Hackathon 2026 Spring](https://gnec-hackathon-2026-spring.devpost.com/) **— and for everyone who needs healthcare but can't afford it.**
