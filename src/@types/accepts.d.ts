/// <reference types="node" />

declare module "accepts" {
    import * as React from 'react';

    namespace ReactPDF {
        export interface Style {}
        interface Styles {
            [key: string]: Style;
        }


        const StyleSheet: {
            hairlineWidth: number;
            create: (styles: Styles) => Styles;
            resolve: (
                style: Style,
                container: {
                    width: number;
                    height: number;
                    orientation: Orientation;
                },
            ) => Style;
            flatten: (...style: (Style[] | Style | undefined)[]) => Style;
            absoluteFillObject: {
                position: 'absolute';
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            };
        };

    }

    const StyleSheet: typeof ReactPDF.StyleSheet;

    // export default ReactPDF;
    export {
        StyleSheet,
    };
}
