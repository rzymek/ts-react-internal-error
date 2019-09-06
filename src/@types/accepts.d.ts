
declare module "accepts" {

    namespace ReactPDF {
        export interface Style {}

        const StyleSheet: {
            create: Style;
        };

    }

    const StyleSheet: typeof ReactPDF.StyleSheet;

    // export default ReactPDF;
    export {
        StyleSheet,
    };
}
