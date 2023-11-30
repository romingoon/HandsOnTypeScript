interface Employee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueId: () => string;
}

const linda: Employee = {
  name: 'linda',
  id: 2,
  isManager: true,
  getUniqueId: (): string => {
    let unigueId = `${linda.id}-${linda.name}`;
    if (linda.isManager) {
      unigueId = `Mgr-${unigueId}`;
    }
    return unigueId;
  },
};

console.log(linda.getUniqueId());

const Tommy: Employee = {
  name: 'Tommy',
  id: 3,
  isManager: false,
  getUniqueId: (): string => {
    let unigueId = `${Tommy.id}-${Tommy.name}`;
    if (!Tommy.isManager) {
      unigueId = `Emp-${unigueId}`;
    }
    return unigueId;
  },
};

console.log(Tommy.getUniqueId());
