// 변환 비율 정의
const conversionRates = {
    "N·m": { "kgf·m": 0.10197, "lbf·ft": 0.73756, "lbf·in": 8.8507 },
    "kgf·m": { "N·m": 9.80665, "lbf·ft": 7.233, "lbf·in": 86.796 },
    "lbf·ft": { "N·m": 1.35582, "kgf·m": 0.1383, "lbf·in": 12 },
    "lbf·in": { "N·m": 0.113, "kgf·m": 0.0115, "lbf·ft": 0.0833 }
};

// 단위 변환 함수
function convertTorque() {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    
    // 입력값이 없거나 숫자가 아닐 경우 오류 메시지 표시
    if (isNaN(inputValue)) {
        document.getElementById("result").innerText = "숫자 입력 안하지? 이것봐라!";
        return;
    }

    // 동일한 단위 선택 시 경고 메시지 표시
    if (fromUnit === toUnit) {
        document.getElementById("result").innerText = "정신안차려? 단위가 같잖어";
        return;
    }

    // 변환 계산 수행
    let result = inputValue * conversionRates[fromUnit][toUnit];

    // 결과 출력
    document.getElementById("result").innerText = 
        `${inputValue} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
}
