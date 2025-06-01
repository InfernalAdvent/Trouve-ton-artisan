import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] sticky bottom-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <ul className="hidden md:block">
                    <li>
                        <NavLink className="text-primaryBlue hover:text-secondaryBlue font-bold leading-10" to="/construction">
                        Mentions légales
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-primaryBlue hover:text-secondaryBlue font-bold leading-10" to="/construction">
                        Données personnelles
                        </NavLink>
                    </li>
                </ul>
                <ul className="hidden md:block">
                    <li>
                        <NavLink className="text-primaryBlue hover:text-secondaryBlue font-bold leading-10" to="/construction">
                        Accessibilité
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-primaryBlue hover:text-secondaryBlue font-bold leading-10" to="/construction">
                        Cookies
                        </NavLink>
                    </li>
                </ul>
                <ul className="block md:hidden">
                     <li>
                        <NavLink className="text-primaryBlue hover:text-secondaryBlue font-bold leading-7" to="/construction">
                        Mentions légales
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-primaryBlue hover:text-secondaryBlue font-bold leading-7" to="/construction">
                        Données personnelles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-primaryBlue hover:text-secondaryBlue font-bold leading-7" to="/construction">
                        Accessibilité
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-primaryBlue hover:text-secondaryBlue font-bold leading-7" to="/construction">
                        Cookies
                        </NavLink>
                    </li>
                </ul>
                <address>
                <div>
                  <p className="font-sans text-primaryBlue not-italic">101 cours Charlemagne</p>
                  <p className="font-sans text-primaryBlue not-italic">CS 20033</p>
                  <p className="font-sans text-primaryBlue not-italic">69269 LYON CEDEX 02</p>
                  <p className="font-sans text-primaryBlue not-italic">France</p>
                  <p className="font-sans text-primaryBlue not-italic">+33 (0)4 26 73 40 00</p>
                </div>
              </address>

            </div>
        </footer>     
    )
}