/**
 * ===================================================
 * 1️⃣ Find the Temperature
 * ===================================================
 * Find the temperature closest to zero in an array.
 * 
 * Example:
 * Input: findTemperature([7, -10, 13, 8, -2])
 * Output: -2
 */
function findTemperature(temps) {
    if (!temps || temps.length === 0) return null;

    return temps.reduce((closest, temp) => {
        const absClosest = Math.abs(closest);
        const absTemp = Math.abs(temp);

        if (
            absTemp < absClosest ||
            (absTemp === absClosest && temp > closest)
        ) {
            return temp;
        }
        return closest;
    }, temps[0]);
}



/**
 * ===================================================
 * 2️⃣ Robotic Packages Classifier
 * ===================================================
 * Classify packages based on weight: "Light", "Medium", "Heavy".
 *
 * Example:
 * Input: classifyPackage(5)
 * Output: "Light"
 */
const threshold = {
    light: 5,
    medium: 10,
};
function classifyPackage(weight) {
    if (typeof weight !== 'number') return null;
    if (weight <= 5 ) return "Light"
    else if (weight <= 10) return "Medium"
    else return "Heavy"

}

function classifyPackageWithThreshold(weight, threshold) {
    if (typeof weight !== 'number') return null;
    if (weight <= threshold.light) return `Light`
    else if (weight <= threshold.medium) return `Medium`
    else return `Heavy`
}


/**
 * ===================================================
 * 3️⃣ Interlocked Blocks - Easy
 * ===================================================
 * Check if blocks can fit together (e.g., Tetris-like check).
 *
 * Example:
 * Input: areBlocksInterlocked([1,0,1],[0,1,0])
 * Output: true
 */
function areBlocksInterlocked(blockA, blockB) {
    if (!Array.isArray(blockA) || !Array.isArray(blockB)) return false;
    if (blockA.length !== blockB.length) return false;

    for (let i = 0; i < blockA.length; i++) {
        if (blockA[i] === 1 && blockB[i] === 1) {
            return false; // overlap — cannot interlock
        }
    }
    return true; // they interlock safely
}

