import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-8 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Laboris occaecat consequat deserunt quis et dolore elit in officia
              culpa. Ex magna id exercitation aliquip officia. Esse deserunt
              deserunt reprehenderit quis reprehenderit mollit est.
            </p>
            <Link to="/about/">
              <button type="button" class="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
