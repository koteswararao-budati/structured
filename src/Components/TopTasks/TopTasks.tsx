import styles from "./TopTasks.module.css"

function TopTasks() {
    return (
        <div className={styles.tasks}>
            <h3 className={styles.heading}>Top 3 Tasks for the Day</h3>
            <div>
                <h3>hello</h3>
                <h3>hello</h3>
                <h3>hello</h3>
            </div>
            <h3 className={styles.heading}>Top 3 Secondary Task for the Day</h3>
            <div>
                <h3>hello</h3>
                <h3>hello</h3>
                <h3>hello</h3>
            </div>
        </div>
    )
}

export default TopTasks;