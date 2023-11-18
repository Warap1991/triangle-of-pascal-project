function drawPascalTriangle() {
    const rowCount = parseInt(document.getElementById("rowCount").value);
    const pascalTriangle = document.getElementById("pascalTriangle");
    pascalTriangle.innerHTML = "";

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement("div");
        row.className = "pascal-row";

        for (let j = 0; j <= i; j++) {
            const coefficient = binomialCoefficient(i, j);
            const cell = document.createElement("span");
            cell.className = "pascal-cell";
            cell.textContent = coefficient;
            row.appendChild(cell);
        }

        pascalTriangle.appendChild(row);
    }
}

function binomialCoefficient(n, k) {
    if (k === 0 || k === n) return 1;
    return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
}
