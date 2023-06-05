export default class ObjectUtils {
    static filter(obj, predicate) {
        return Object.fromEntries(Object.entries(obj).filter(predicate));
    }

    static convertToFormData(obj) {
        const formData = new FormData()
        for (const key in obj) {
            formData.append(key, obj[key]);
        }
        return formData
    }
}