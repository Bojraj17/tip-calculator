import { useMemo, useState } from "react";

const PRESET_TIPS = [10, 15, 20];

export default function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("1");
  const [selectedTip, setSelectedTip] = useState(15);
  const [customTip, setCustomTip] = useState("");

  const parsedBill = parseFloat(bill);
  const parsedPeople = parseInt(people, 10);

  const activeTip =
    customTip !== "" ? parseFloat(customTip) : selectedTip;

  const errors = useMemo(() => {
    const newErrors = {};

    if (bill !== "") {
      if (isNaN(parsedBill) || parsedBill <= 0) {
        newErrors.bill = "Bill must be greater than 0";
      }

      if (parsedBill > 1000000000) {
        newErrors.bill = "Bill amount is too large";
      }
    }

    if (activeTip < 0 || activeTip > 100) {
      newErrors.tip = "Tip must be between 0% and 100%";
    }

    if (people !== "") {
      if (
        isNaN(parsedPeople) ||
        parsedPeople < 1 ||
        !Number.isInteger(parsedPeople)
      ) {
        newErrors.people =
          "Number of people must be at least 1";
      }
    }

    return newErrors;
  }, [bill, parsedBill, activeTip, people, parsedPeople]);

  const calculations = useMemo(() => {
    if (
      errors.bill ||
      errors.tip ||
      errors.people ||
      bill === ""
    ) {
      return {
        tipAmount: 0,
        total: 0,
        perPerson: 0,
      };
    }

    const tipAmount = (parsedBill * activeTip) / 100;
    const total = parsedBill + tipAmount;

    const perPerson =
      Math.ceil((total / parsedPeople) * 100) / 100;

    return {
      tipAmount,
      total,
      perPerson,
    };
  }, [
    parsedBill,
    activeTip,
    parsedPeople,
    errors,
    bill,
  ]);

  const resetAll = () => {
    setBill("");
    setPeople("1");
    setSelectedTip(15);
    setCustomTip("");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <section className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Tip Calculator
        </h1>

        <div className="space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Bill Amount (₹)
            </label>

            <input
              type="number"
              inputMode="decimal"
              placeholder="Enter bill amount"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className={`w-full border rounded-xl p-3 outline-none transition ${
                errors.bill
                  ? "border-red-500"
                  : "border-gray-300 focus:border-black"
              }`}
            />

            {errors.bill && (
              <p className="text-red-500 text-sm mt-1">
                {errors.bill}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Select Tip %
            </label>

            <div className="grid grid-cols-4 gap-3">

              {PRESET_TIPS.map((tip) => (
                <button
                  key={tip}
                  type="button"
                  onClick={() => {
                    setSelectedTip(tip);
                    setCustomTip("");
                  }}
                  className={`p-3 rounded-xl font-semibold transition ${
                    customTip === "" && selectedTip === tip
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {tip}%
                </button>
              ))}

              <input
                type="number"
                inputMode="decimal"
                placeholder="Custom"
                value={customTip}
                onChange={(e) => setCustomTip(e.target.value)}
                className={`border rounded-xl p-3 outline-none ${
                  errors.tip
                    ? "border-red-500"
                    : "border-gray-300 focus:border-black"
                }`}
              />
            </div>

            {errors.tip && (
              <p className="text-red-500 text-sm mt-1">
                {errors.tip}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Number of People
            </label>

            <input
              type="number"
              inputMode="numeric"
              min="1"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className={`w-full border rounded-xl p-3 outline-none ${
                errors.people
                  ? "border-red-500"
                  : "border-gray-300 focus:border-black"
              }`}
            />

            {errors.people && (
              <p className="text-red-500 text-sm mt-1">
                {errors.people}
              </p>
            )}
          </div>

          <div className="bg-gray-100 rounded-2xl p-5 space-y-4">

            <div className="flex justify-between">
              <span>Total Tip</span>

              <span className="font-semibold">
                ₹{calculations.tipAmount.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Grand Total</span>

              <span className="font-semibold">
                ₹{calculations.total.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Per Person</span>

              <span>
                ₹{calculations.perPerson.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={resetAll}
            className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl font-semibold transition"
          >
            Reset Calculator
          </button>
        </div>
      </section>
    </main>
  );
}