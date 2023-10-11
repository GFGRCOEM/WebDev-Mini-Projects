uniform float uTime;
uniform float uSize;
attribute float aScale;
attribute vec3 aRandom;
varying vec3 vColor;

void main(){
    vec4 modelPosition = modelMatrix * vec4(position , 1.0);
    // modelPosition.y += uTime;
    //Spin

    float angle = atan(modelPosition.x , modelPosition.z);
    float distanceToCenter = length(modelPosition.xz);
    float angleOfset = (1.0/distanceToCenter) * uTime * 0.2;
    angle += angleOfset;

    modelPosition.x = cos(angle) * distanceToCenter;
    modelPosition.z = sin(angle) * distanceToCenter;

    //randomness
    modelPosition.xyz += aRandom;
    // modelPosition.x += aRandom.x;
    // modelPosition.y += aRandom.y;
    // modelPosition.z += aRandom.z;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    gl_PointSize = uSize * aScale;


    gl_PointSize *= (1.0 /- viewPosition.z);

    vColor = color;
                 
}