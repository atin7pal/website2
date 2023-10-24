const calculatorbody = document.getElementById("calculator_body");
const calculatortoggle = document.getElementById("calulatorshowbutton");

function showcalculator() {
  document.getElementById("calculatorbackground").style.backgroundColor =
    "white";
  calculatorbody.style.visibility = "visible";
  document.getElementById("cxamt").value = 0;
  document.getElementById("emi").innerHTML = 0;
}

function calculateFortune() {
  let finalamt = parseInt(document.getElementById("cxamt").value);

  emiamount =
    (parseInt(document.getElementById("cxamt").value) * 5) / 100 +
    parseInt(document.getElementById("cxamt").value);
  document.getElementById("emi").innerHTML = emiamount;

  pocketamount = parseInt(document.getElementById("cxamt").value);
  document.getElementById("pocketmoney").innerHTML = pocketamount;

  maturityamt = parseInt(document.getElementById("cxamt").value) * 12 * 10;
  document.getElementById("mature").innerHTML = maturityamt;

  profitearned =
    parseInt(document.getElementById("cxamt").value) * 12 * 10 +
    parseInt(document.getElementById("cxamt").value) * 12 * 30;

  document.getElementById("profit").innerHTML = profitearned;

  baseprofit = profitearned - maturityamt;

  finalprofit = (baseprofit / maturityamt) * 100;

  document.getElementById("times").innerHTML = `${finalprofit}%`;
}

function calculatorclose() {
  const zero = 0;
  document.getElementById("cxamt").value = zero;
  document.getElementById("emi").innerHTML = zero;
  calculatorbody.style.visibility = "hidden";
}
