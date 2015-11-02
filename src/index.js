var containers = {};

class ModalService {
  registerContainer (name, container) {
    if (typeof name !== 'string') {
      container = name;
      name = 'default';
    }
    
    if (containers[name]) throw new Error(`Container ${name} already exists`);
    
    containers[name] = container;
  }
  
  unregisterContainer (name) {
    if (!containers[name]) throw new Error(`Container ${name} doesn\'t exist`);
    
    delete containers[name];
  }
  
  open (element, container = 'default') {
    if (typeof container === 'string') container = containers[container];
    
    if (!container) throw new Error(`Container ${containerName} not found`);
    
    return container.openModal(element);
  }
}

export default new ModalService()