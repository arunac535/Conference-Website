import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function PDFViewer() {
  const docs = [
    { uri: require("../assets/Schedule.pdf") }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}

export default PDFViewer