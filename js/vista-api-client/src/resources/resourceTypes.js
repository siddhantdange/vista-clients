
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class ResourceTypes extends ApiResource {
    list = async () => {
        return this.dispatch('/v1/resource_types', HTTP_METHODS.GET, {
            branch: this.branch,
        });
    }

    upsert = async (name, actions) => {
        return this.dispatch('/v1/resource_types', HTTP_METHODS.POST, {
            name: name,
            actions: actions,
            branch: this.branch,
        });
    }
}

export default ResourceTypes;
