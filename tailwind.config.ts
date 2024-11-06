import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      scrollbar: {
        width: "8px",
        height: "4px",
        background: "#FFF",
        backgroundColor: "transparent",
        borderRadius: "0px",
        display: "flow-root",
      },
      scrollbarThumb: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: "0px",
      },
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
