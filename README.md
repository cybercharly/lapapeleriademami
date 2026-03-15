# La Papelería de Mami

Monorepo for all technical assets related to **La Papelería de Mami** — a stationery and office supply business based in El Salto, Jalisco, México, offering wholesale, retail, and home delivery services to companies and individuals.

---

## Repository Structure

```
lapapeleriademami/
├── lapapeleriademami.com/   # Static website source
└── infra/                   # (planned) Infrastructure as Code — Terraform
```

---

## `lapapeleriademami.com/` — Website

Static website built with plain **HTML5**, **Tailwind CSS** (CDN), and **Vanilla JavaScript**. No build step or database required.

### Pages

| File | Description |
|---|---|
| `index.html` | Landing page — hero, services overview, customer segments, credit CTA |
| `servicios.html` | Full services catalog — stationery, office supplies, printing, government paperwork, gifts, perfumery |
| `nosotros.html` | About us — story, mission, vision, values |
| `contacto.html` | Contact page — WhatsApp quote form, phone, email, map, business hours |

### Assets

```
assets/
├── css/style.css   # Brand colors, animations, shared component styles
└── js/main.js      # Mobile menu, active nav highlighting, WhatsApp form handler
img/
├── logo2.png       # Brand logo (navbar + footer)
└── main_pape.png   # Hero illustration (index page)
```

### Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN) + custom CSS variables |
| Icons | Font Awesome 6 (CDN) |
| Fonts | Google Fonts — Poppins |
| Interactivity | Vanilla JavaScript |
| Contact/CTA | WhatsApp deep links (`wa.me`) |

### Contact & Brand Info

| Field | Value |
|---|---|
| Phone / WhatsApp | 333 481 7411 |
| Email | contacto@lapapeleriademami.com |
| Address | Tabaquillo 3154C, Col. La Azucena, El Salto, Jalisco, C.P. 45680 |
| Facebook | [facebook.com/papeleriademami](https://www.facebook.com/papeleriademami) |
| Business hours | Mon–Fri 9:00–20:00 · Sat–Sun 9:00–15:00 |

---

## `infra/` — Infrastructure (Planned)

> Not yet implemented. This section documents the intended infrastructure layout.

All cloud infrastructure will be managed with **Terraform** and version-controlled here.

### Planned modules

```
infra/
├── terraform/
│   ├── hosting/        # Static site hosting (e.g. S3 + CloudFront or similar)
│   ├── dns/            # DNS records for lapapeleriademami.com
│   ├── cdn/            # CDN configuration and cache rules
│   ├── ssl/            # TLS/SSL certificate provisioning
│   └── email/          # Transactional email infrastructure (MX, SPF, DKIM)
└── README.md           # Infra-specific docs
```

### Goals

- Zero-downtime deployments of the static site
- Automated SSL certificate renewal
- CDN caching for fast load times across Mexico
- DNS management for domain and subdomains
- Email routing for `contacto@lapapeleriademami.com`

---

## Future Roadmap

- [ ] `mayoreo.html` — Dedicated wholesale landing page with credit application flow
- [ ] `faq.html` — Frequently asked questions (reduces contact friction)
- [ ] `tramites.html` — Dedicated page for government paperwork services (SEO)
- [ ] `promociones.html` — Monthly promotions and seasonal offers
- [ ] `catalogo.html` — Visual product catalog by category
- [ ] Terraform `hosting` module — deploy site to cloud
- [ ] Terraform `dns` module — manage DNS for `lapapeleriademami.com`
- [ ] CI/CD pipeline — auto-deploy on push to `main`
- [ ] Google Analytics or privacy-friendly alternative

---

## Contributing

This is a private business repository. Changes to the website should be tested locally by opening `index.html` in a browser before committing. No build step is required.

---

## License

Private — All rights reserved. © 2025 La Papelería de Mami.
