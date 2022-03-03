import modules from "@/store/modules";

export default function () {
  for (const [moduleName, module] of Object.entries(modules)) {
    /*
      NOTE: existing modules from the Quoti core cannot be unregistered
            and overriding them will cause unexpected behavior.
            Therefore, it is recommended to create your own module
            with unique naming.
            Use override at your own risk!!
    */

    // Unregisters the module to be overridden
    if (module.override) {
      this.$store.unregisterModule(moduleName);
    }
    // Registers the module if it does not exist or if it is an override
    if (!this.$store.hasModule(moduleName, module) || module.override) {
      this.$store.registerModule(moduleName, module);
    }
  }
}
