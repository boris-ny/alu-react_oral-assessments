/**
 * Represents a node in the linked list.
 * @template T The type of value stored in the node.
 */
class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    /**
     * Creates a new ListNode.
     * @param value The value to be stored in the node.
     */
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Implements a singly linked list.
 * @template T The type of elements in the linked list.
 */
class LinkedList<T> {
    private head: ListNode<T> | null;

    /**
     * Creates an empty linked list.
     */
    constructor() {
        this.head = null;
    }

    /**
     * Adds a new element to the end of the list.
     * @param value The value to be added to the list.
     */
    add(value: T): void {
        const newNode = new ListNode(value);
        
        // If the list is empty, set the new node as the head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // Traverse to the end of the list
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        
        // Add the new node at the end
        current.next = newNode;
    }

    /**
     * Removes the first occurrence of a specified element from the list.
     * @param value The value to be removed.
     * @returns True if the element was found and removed, false otherwise.
     */
    remove(value: T): boolean {
        if (!this.head) return false;

        // Special case: removing the head
        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }

        // Traverse the list to find the element
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                // Remove the node by updating the next reference
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }

        // Element not found
        return false;
    }

    /**
     * Finds the first node with the specified value.
     * @param value The value to search for.
     * @returns The node containing the value, or null if not found.
     */
    find(value: T): ListNode<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    /**
     * Creates a string representation of the list.
     * @returns A string showing all elements in the list.
     */
    display(): string {
        let result = '';
        let current = this.head;
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        return result + 'null';
    }
}

// Example usage
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
console.log(list.display()); // Output: 1 -> 2 -> 3 -> null

list.remove(2);
console.log(list.display()); // Output: 1 -> 3 -> null

const foundNode = list.find(3);
console.log(foundNode ? foundNode.value : 'Not found'); // Output: 3
