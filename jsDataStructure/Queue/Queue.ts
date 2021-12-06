class Queue {
    list: any[] = [];

    push = (val: any) => {
        this.list.push(val);
    };

    shift = () => {
        return this.list.shift();
    };

    peek = () => {
        const len = this.list.length;
        if (len) {
            return this.list[this.list.length - 1];
        }
        return null;
    };

    empty = () => {
        const len = this.list.length;
        if (len) {
            return true;
        }
        return false;
    };

    front = () => {
        return this.list[0];
    };

    toString = () => {
        return this.list.join(",");
    };
}
