/**
 * Checks if an item (string, number, array, object) is empty or not
 * @param item
 * @returns returns true if empty, or false if not
 */

export function isEmpty(item) {
  if (!!item) {
    switch (typeof item) {
      case "string":
        if (item !== "" && item !== "null" && item !== "undefined") {
          return false;
        }
        return true;
      case "number":
        return false;
      case "object":
        if (JSON.stringify(item) === "{}" || JSON.stringify(item) === "[]") {
          return true;
        }
        return false;
    }
    return true;
  }
  return true;
}
