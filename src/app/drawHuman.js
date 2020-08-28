import { PLAYER_RADIUS } from "./config";

export function drawHuman(context, color) {
    context.strokeStyle = 'black';
    context.beginPath();
    context.arc(0, 0, PLAYER_RADIUS, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = color;
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(14, 3);
    context.lineTo(0, 3);
    context.lineTo(0, 0);
    context.lineTo(14, 0);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.stroke();
}