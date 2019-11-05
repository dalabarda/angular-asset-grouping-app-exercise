import { Subscription } from 'rxjs';

/**
 * Serializes an object taking into account that Subscription properties may contain circular references.
 * @param obj Object to serialize
 */
export function serialize(obj: any): string
{
    try
    {
        return JSON.stringify(obj,
            (key, value) => value instanceof Subscription ? key : value,
            2);
    }
    catch (ex)
    {
        return obj.toString();
    }
}