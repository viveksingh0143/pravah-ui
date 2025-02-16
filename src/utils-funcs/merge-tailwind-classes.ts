export function mergeTailwindClasses(baseClasses: string, userClasses: string): string {
  const baseSet = new Map<string, string>();
  const userSet = new Map<string, string>();

  // Convert base classes into a Map
  baseClasses
    .split(/\s+/)
    .forEach(cls => {
      const parts = cls.split(":");
      const baseClass = parts.pop()!;
      const prefix = parts.length ? parts.join(":") + ":" : "";
      const [utility, ...modifiers] = baseClass.split("-"); // Extract base utility

      const key = prefix + utility; // Store variant + base utility
      baseSet.set(key, cls);
    });

  // Convert user classes into a Map (overrides previous values)
  userClasses
    .split(/\s+/)
    .forEach(cls => {
      const parts = cls.split(":");
      const baseClass = parts.pop()!;
      const prefix = parts.length ? parts.join(":") + ":" : "";
      const [utility, ...modifiers] = baseClass.split("-");

      const key = prefix + utility;
      userSet.set(key, cls);
    });

  const finalClasses = new Map(baseSet);

  // Process user-defined classes (replace only matching base utility modifiers, keep base utility)
  userSet.forEach((userValue, key) => {
    // If user class matches base utility like "border", replace only modifier class (e.g., "border-gray-400")
    if (key === "border" || key === "bg" || key === "text") {
      [...finalClasses.keys()].forEach(existingKey => {
        if (existingKey.startsWith(key + "-")) {
          finalClasses.delete(existingKey); // Remove only the existing modifier
        }
      });
    }

    // Add user-defined class
    finalClasses.set(key, userValue);
  });

  return Array.from(finalClasses.values()).join(" ");
}