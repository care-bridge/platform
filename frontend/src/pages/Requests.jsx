import { useState } from "preact/hooks";

import TipJarIcon from "@icons/tip-jar.svg";
import ChatIcon from "@icons/chat-centered-dots.svg";
import ArrowLeft from "@icons/arrow-square-left.svg";
import ArrowRight from "@icons/arrow-square-right.svg";
import Shield from "@icons/shield-check.svg";

import "@css/requests.css";

const mockRequests = [
  {
    id: 1,
    hospital: "North Hospital LTD.",
    description: "Patient needs urgent surgery for a critical condition.",
    priority: "VERY HIGH",
    amount: "$0 of $50k needed",
  },
  {
    id: 2,
    hospital: "City Care Hospital",
    description: "Blood donation required urgently (O+).",
    priority: "HIGH",
    amount: "$5k of $20k needed",
  },
  {
    id: 3,
    hospital: "Global Health Center",
    description: "Financial assistance required for medicines.",
    priority: "MEDIUM",
    amount: "$2k of $10k needed",
  },
];

export default function Requests() {
  const [search, setSearch] = useState("");

  const filteredRequests = mockRequests.filter((req) =>
    (req.hospital + req.description)
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <section id="cont" class="container-fluid">
      {/* LEFT SIDE */}
      <aside class="container">
        <form role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Search for hospital..."
            value={search}
            onInput={(e) => setSearch(e.target.value)}
            style="margin-bottom: 10px;"
          />
        </form>

        <button class="arrow-btn" id="arrow-btn-left">
          <img src={ArrowLeft} />
        </button>

        <button class="arrow-btn hide-arrow" id="arrow-btn-right">
          <img src={ArrowRight} />
        </button>

        {/* FILTER FORM (UNCHANGED) */}
        <form>
          <h2>Filter Requests</h2>
          <hr />

          <div class="grid">
            <select>
              <option>Type (All)</option>
            </select>

            <select>
              <option>Country (All)</option>
            </select>
          </div>

          <div class="grid">
            <select>
              <option>Priority (All)</option>
            </select>

            <select>
              <option>Amount</option>
            </select>
          </div>

          <input type="submit" value="Filter" />
        </form>
      </aside>

      {/* RIGHT SIDE */}
      <section id="right">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((req) => (
            <article key={req.id} class="request-card">
              <header>
                <div class="inner-1">
                  <div class="hospital-logo"></div>
                  <span>{req.hospital}</span>
                </div>

                <div role="link" class="trust">
                  Trusted <img src={Shield} />
                </div>
              </header>

              <p>{req.description}</p>

              <div class="tags">
                <span class="priority">{req.priority}</span>
                <span class="donation-amount">{req.amount}</span>
              </div>

              <footer class="grid">
                <a role="button" class="donate-btn" href="/requests">
                  DONATE <img src={TipJarIcon} />
                </a>

                <a
                  role="button"
                  class="secondary contact-btn"
                  href="/requests/contact"
                >
                  CONTACT <img src={ChatIcon} />
                </a>
              </footer>
            </article>
          ))
        ) : (
          <p style="text-align:center; margin-top:20px;">
            😕 No matching requests found
          </p>
        )}
      </section>
    </section>
  );
}
