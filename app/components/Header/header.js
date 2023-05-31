import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { Button } from "antd";

function Header() {
    return (
        <div className={styles.headerContainer}>
      <div className={styles.left}>
        <Link href="/">
          <img src="images/logo.png" alt="Logo" />
        </Link>
        </div>
        <div className={styles.right}>
            <div className={styles.withoutDropdown}>
                

            </div>

        </div>
        
      </div>
    )
}



export default Header