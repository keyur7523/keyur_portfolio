// Critically damped (no overshoot): the default for UI that simply appears.
export const spring = { type: 'spring', bounce: 0, duration: 0.4 };
// A little overshoot, only when the user's own gesture carried momentum.
export const flickSpring = { type: 'spring', bounce: 0.2, duration: 0.4 };

// Apple's momentum projection (Designing Fluid Interfaces, WWDC 2018): where a flick would come to rest
export const project = (velocity, decelerationRate = 0.998) =>
    (velocity / 1000) * decelerationRate / (1 - decelerationRate);

// 1 = next, -1 = previous, 0 = snap back. Decided by where the gesture is going, not where it let go.
export function swipeDirection(offset, velocity, width) {
    const projected = offset + project(velocity);
    if (Math.abs(projected) < width / 4) return 0;
    // A firm flick back against a long drag means "never mind", not "go the other way"
    if (Math.abs(offset) > width / 4 && Math.abs(velocity) > 200 && Math.sign(velocity) !== Math.sign(offset)) return 0;
    return projected < 0 ? 1 : -1;
}
