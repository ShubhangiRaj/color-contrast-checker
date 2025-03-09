export function getContrastRatio(fg, bg) {
    function luminance(color) {
      const c = parseInt(color, 16) / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }
  
    const r1 = luminance(fg.substring(1, 3));
    const g1 = luminance(fg.substring(3, 5));
    const b1 = luminance(fg.substring(5, 7));
  
    const r2 = luminance(bg.substring(1, 3));
    const g2 = luminance(bg.substring(3, 5));
    const b2 = luminance(bg.substring(5, 7));
  
    const L1 = 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1;
    const L2 = 0.2126 * r2 + 0.7152 * g2 + 0.0722 * b2;
  
    return L1 > L2 ? (L1 + 0.05) / (L2 + 0.05) : (L2 + 0.05) / (L1 + 0.05);
  }
  