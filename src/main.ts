export default function () {
  const container = figma.createFrame();
  container.resize(1505, 762);
  container.name = 'Bento Container';
  container.fills = [{ type: 'SOLID', color: { r: 236 / 255, g: 236 / 255, b: 236 / 255 } }];
  container.cornerRadius = 36;

  const specs = [
    { x: 25, y: 25, w: 355, h: 124 },
    { x: 392, y: 25, w: 354, h: 192 },
    { x: 759, y: 25, w: 428, h: 192 },
    { x: 1200, y: 25, w: 280, h: 192 },
    { x: 25, y: 161, w: 355, h: 328 },
    { x: 392, y: 229, w: 722, h: 396 },
    { x: 1125, y: 229, w: 355, h: 328 },
    { x: 25, y: 501, w: 208, h: 236 },
    { x: 245, y: 501, w: 135, h: 124 },
    { x: 1126, y: 569, w: 208, h: 168 },
    { x: 1346, y: 569, w: 134, h: 168 },
    { x: 245, y: 637, w: 281, h: 100 },
    { x: 538, y: 637, w: 208, h: 100 },
    { x: 759, y: 637, w: 355, h: 100 }
  ];

  const rectFill: Paint = { type: 'SOLID', color: { r: 1, g: 1, b: 1 } };

  for (const { x, y, w, h } of specs) {
    const rect = figma.createRectangle();
    rect.resize(w, h);
    rect.cornerRadius = 26;
    rect.fills = [rectFill];
    rect.x = x;
    rect.y = y;
    container.appendChild(rect);
  }

  figma.currentPage.appendChild(container);
  figma.viewport.scrollAndZoomIntoView([container]);
  figma.closePlugin();
}
