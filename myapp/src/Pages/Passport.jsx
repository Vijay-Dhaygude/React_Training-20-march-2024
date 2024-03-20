import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Passport() {
  return (
    <div>
      <h1>Passport Booking</h1>
      <Link to="/passport/regular">
        <button type="button" className="btn btn-outline-info m-2">
          Regular
        </button>
      </Link>
      <Link to="/passport/tatkal">
        <button type="button" className="btn btn-outline-warning m-2">
          Tatkal
        </button>
      </Link>
      <Outlet />
    </div>
  );
}
