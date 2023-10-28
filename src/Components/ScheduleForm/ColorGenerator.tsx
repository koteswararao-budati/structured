import styles from "./ColorGenerator.module.css";

export default function ColorGenerator() {
    return (
        <>
            <div style={{margin: "20px 0"}}>
                <h5>What Color?</h5>
            </div>
            <div className={styles.color}>
                {["#ee82ee", "#3cb371", "#6a5acd", "#ffffff",].map((item, index) => {
                    return <button className={styles.colorButton} key={index}>
                        <input className={styles.colorInput} type={"color"} value={item}
                               disabled={true}/>
                    </button>
                })}
                <button className={styles.colorButton}>
                    <input className={styles.colorInput} type={"color"}/>
                </button>
            </div>
        </>
    )
}