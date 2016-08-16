// Putting some type safety on reading files
// Idea inherited from microsoft github: 
interface FileEventTarget extends EventTarget {
    files : File[];
}

interface FileReaderEvent extends Event {
    target: FileEventTarget;
    getMessage():string;
}