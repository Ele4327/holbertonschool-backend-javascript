import ClassRoom from './0-classroom.js';

export default function initializeRooms(){
    let room0 = new ClassRoom(19);
    let room1 = new ClassRoom(20);
    let room2 = new ClassRoom(34);
    const totalroom = [room0, room1, room2];
    return [totalroom];
}