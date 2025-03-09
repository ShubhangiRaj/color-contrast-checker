import { getContrastRatio } from "../utils/contrastChecker";

const ContrastResult = ({ fgColor, bgColor }) => {
  const contrastRatio = getContrastRatio(fgColor, bgColor).toFixed(2);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-center">
      <p className="text-lg font-semibold">Contrast Ratio: {contrastRatio}:1</p>
      <p className={contrastRatio >= 4.5 ? "text-green-600" : "text-red-600"}>
        {contrastRatio >= 4.5 ? "✅ Passes WCAG AA for normal text" : "❌ Fails WCAG AA for normal text"}
      </p>
      <p className={contrastRatio >= 3 ? "text-green-600" : "text-red-600"}>
        {contrastRatio >= 3 ? "✅ Passes WCAG AA for large text" : "❌ Fails WCAG AA for large text"}
      </p>
    </div>
  );
};

export default ContrastResult;