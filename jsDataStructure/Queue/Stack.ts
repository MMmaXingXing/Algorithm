class Stack {
    value: any[] = [];
    top: number = 0;

    push(el: any) {
        this.value[this.top] = el;
        this.top++;
    }

    pop() {
        const temp = this.value[this.top - 1];
        this.value.length = --this.top;
        return temp;
    }

    peek() {
        return this.value[this.top - 1];
    }
}

const a = new Stack();
a.push(1);
a.push(2);
a.push(3);
console.log(a.peek());
console.log(a.value);
console.log(a.pop());
console.log(a.value);
