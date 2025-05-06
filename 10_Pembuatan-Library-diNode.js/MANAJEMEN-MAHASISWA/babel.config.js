export default {
    presets: [
      [
        "@babel/preset-env",
        {
          // Instead of .targets directly in the preset
          targets: {
            node: "current",
          },
        },
      ],
    ],
  };