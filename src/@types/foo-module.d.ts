declare module "foo-module" {

    namespace FooNamespace {
        interface FooType {
        }

        interface BarTyp {
            field: FooType;
        }

    }

    const FooVar: FooNamespace.BarTyp;

    export {
        FooVar,
    };
}
