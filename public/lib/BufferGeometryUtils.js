function computeTangents(e){e.computeTangents(),console.warn("THREE.BufferGeometryUtils: .computeTangents() has been removed. Use BufferGeometry.computeTangents() instead.")}function mergeBufferGeometries(e,t=!1){const r=null!==e[0].index,o=new Set(Object.keys(e[0].attributes)),n=new Set(Object.keys(e[0].morphAttributes)),i={},s={},u=e[0].morphTargetsRelative,a=new BufferGeometry;let f=0;for(let l=0;l<e.length;++l){const m=e[l];let c=0;if(r!==(null!==m.index))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const e in m.attributes){if(!o.has(e))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+e+'" attribute exists among all geometries, or in none of them.'),null;void 0===i[e]&&(i[e]=[]),i[e].push(m.attributes[e]),c++}if(c!==o.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(u!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const e in m.morphAttributes){if(!n.has(e))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;void 0===s[e]&&(s[e]=[]),s[e].push(m.morphAttributes[e])}if(a.userData.mergedUserData=a.userData.mergedUserData||[],a.userData.mergedUserData.push(m.userData),t){let e;if(r)e=m.index.count;else{if(void 0===m.attributes.position)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;e=m.attributes.position.count}a.addGroup(f,e,l),f+=e}}if(r){let t=0;const r=[];for(let o=0;o<e.length;++o){const n=e[o].index;for(let e=0;e<n.count;++e)r.push(n.getX(e)+t);t+=e[o].attributes.position.count}a.setIndex(r)}for(const e in i){const t=mergeBufferAttributes(i[e]);if(!t)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+e+" attribute."),null;a.setAttribute(e,t)}for(const e in s){const t=s[e][0].length;if(0===t)break;a.morphAttributes=a.morphAttributes||{},a.morphAttributes[e]=[];for(let r=0;r<t;++r){const t=[];for(let o=0;o<s[e].length;++o)t.push(s[e][o][r]);const o=mergeBufferAttributes(t);if(!o)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+e+" morphAttribute."),null;a.morphAttributes[e].push(o)}}return a}function mergeBufferAttributes(e){let t,r,o,n=0;for(let i=0;i<e.length;++i){const s=e[i];if(s.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(void 0===t&&(t=s.array.constructor),t!==s.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(void 0===r&&(r=s.itemSize),r!==s.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(void 0===o&&(o=s.normalized),o!==s.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;n+=s.array.length}const i=new t(n);let s=0;for(let t=0;t<e.length;++t)i.set(e[t].array,s),s+=e[t].array.length;return new BufferAttribute(i,r,o)}function interleaveAttributes(e){let t,r=0,o=0;for(let n=0,i=e.length;n<i;++n){const i=e[n];if(void 0===t&&(t=i.array.constructor),t!==i.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;r+=i.array.length,o+=i.itemSize}const n=new InterleavedBuffer(new t(r),o);let i=0;const s=[],u=["getX","getY","getZ","getW"],a=["setX","setY","setZ","setW"];for(let t=0,r=e.length;t<r;t++){const r=e[t],o=r.itemSize,f=r.count,l=new InterleavedBufferAttribute(n,o,i,r.normalized);s.push(l),i+=o;for(let e=0;e<f;e++)for(let t=0;t<o;t++)l[a[t]](e,r[u[t]](e))}return s}function estimateBytesUsed(e){let t=0;for(const r in e.attributes){const o=e.getAttribute(r);t+=o.count*o.itemSize*o.array.BYTES_PER_ELEMENT}const r=e.getIndex();return t+=r?r.count*r.itemSize*r.array.BYTES_PER_ELEMENT:0,t}function mergeVertices(e,t=1e-4){t=Math.max(t,Number.EPSILON);const r={},o=e.getIndex(),n=e.getAttribute("position"),i=o?o.count:n.count;let s=0;const u=Object.keys(e.attributes),a={},f={},l=[],m=["getX","getY","getZ","getW"];for(let t=0,r=u.length;t<r;t++){const r=u[t];a[r]=[];const o=e.morphAttributes[r];o&&(f[r]=new Array(o.length).fill().map((()=>[])))}const c=Math.log10(1/t),g=Math.pow(10,c);for(let t=0;t<i;t++){const n=o?o.getX(t):t;let i="";for(let t=0,r=u.length;t<r;t++){const r=u[t],o=e.getAttribute(r),s=o.itemSize;for(let e=0;e<s;e++)i+=~~(o[m[e]](n)*g)+","}if(i in r)l.push(r[i]);else{for(let t=0,r=u.length;t<r;t++){const r=u[t],o=e.getAttribute(r),i=e.morphAttributes[r],s=o.itemSize,l=a[r],c=f[r];for(let e=0;e<s;e++){const t=m[e];if(l.push(o[t](n)),i)for(let e=0,r=i.length;e<r;e++)c[e].push(i[e][t](n))}}r[i]=s,l.push(s),s++}}const d=e.clone();for(let t=0,r=u.length;t<r;t++){const r=u[t],o=e.getAttribute(r),n=new o.array.constructor(a[r]),i=new THREE.BufferAttribute(n,o.itemSize,o.normalized);if(d.setAttribute(r,i),r in f)for(let t=0;t<f[r].length;t++){const o=e.morphAttributes[r][t],n=new o.array.constructor(f[r][t]),i=new THREE.BufferAttribute(n,o.itemSize,o.normalized);d.morphAttributes[r][t]=i}}return d.setIndex(l),d}function toTrianglesDrawMode(e,t){if(t===TrianglesDrawMode)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===TriangleFanDrawMode||t===TriangleStripDrawMode){let r=e.getIndex();if(null===r){const t=[],o=e.getAttribute("position");if(void 0===o)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let e=0;e<o.count;e++)t.push(e);e.setIndex(t),r=e.getIndex()}const o=r.count-2,n=[];if(t===TriangleFanDrawMode)for(let e=1;e<=o;e++)n.push(r.getX(0)),n.push(r.getX(e)),n.push(r.getX(e+1));else for(let e=0;e<o;e++)e%2==0?(n.push(r.getX(e)),n.push(r.getX(e+1)),n.push(r.getX(e+2))):(n.push(r.getX(e+2)),n.push(r.getX(e+1)),n.push(r.getX(e)));n.length/3!==o&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=e.clone();return i.setIndex(n),i.clearGroups(),i}return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function computeMorphedAttributes(e){if(!0!==e.geometry.isBufferGeometry)return console.error("THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry."),null;const t=new Vector3,r=new Vector3,o=new Vector3,n=new Vector3,i=new Vector3,s=new Vector3,u=new Vector3,a=new Vector3,f=new Vector3;function l(e,l,m,c,g,d,h,b,p){t.fromBufferAttribute(m,d),r.fromBufferAttribute(m,h),o.fromBufferAttribute(m,b);const y=e.morphTargetInfluences;if(l.morphTargets&&c&&y){u.set(0,0,0),a.set(0,0,0),f.set(0,0,0);for(let e=0,l=c.length;e<l;e++){const l=y[e],m=c[e];0!==l&&(n.fromBufferAttribute(m,d),i.fromBufferAttribute(m,h),s.fromBufferAttribute(m,b),g?(u.addScaledVector(n,l),a.addScaledVector(i,l),f.addScaledVector(s,l)):(u.addScaledVector(n.sub(t),l),a.addScaledVector(i.sub(r),l),f.addScaledVector(s.sub(o),l)))}t.add(u),r.add(a),o.add(f)}e.isSkinnedMesh&&(e.boneTransform(d,t),e.boneTransform(h,r),e.boneTransform(b,o)),p[3*d+0]=t.x,p[3*d+1]=t.y,p[3*d+2]=t.z,p[3*h+0]=r.x,p[3*h+1]=r.y,p[3*h+2]=r.z,p[3*b+0]=o.x,p[3*b+1]=o.y,p[3*b+2]=o.z}const m=e.geometry,c=e.material;let g,d,h;const b=m.index,p=m.attributes.position,y=m.morphAttributes.position,A=m.morphTargetsRelative,B=m.attributes.normal,E=m.morphAttributes.position,w=m.groups,T=m.drawRange;let G,x,M,R,U,S,v,z;const H=new Float32Array(p.count*p.itemSize),X=new Float32Array(B.count*B.itemSize);if(null!==b)if(Array.isArray(c))for(G=0,M=w.length;G<M;G++)for(U=w[G],S=c[U.materialIndex],v=Math.max(U.start,T.start),z=Math.min(U.start+U.count,T.start+T.count),x=v,R=z;x<R;x+=3)g=b.getX(x),d=b.getX(x+1),h=b.getX(x+2),l(e,S,p,y,A,g,d,h,H),l(e,S,B,E,A,g,d,h,X);else for(v=Math.max(0,T.start),z=Math.min(b.count,T.start+T.count),G=v,M=z;G<M;G+=3)g=b.getX(G),d=b.getX(G+1),h=b.getX(G+2),l(e,c,p,y,A,g,d,h,H),l(e,c,B,E,A,g,d,h,X);else if(Array.isArray(c))for(G=0,M=w.length;G<M;G++)for(U=w[G],S=c[U.materialIndex],v=Math.max(U.start,T.start),z=Math.min(U.start+U.count,T.start+T.count),x=v,R=z;x<R;x+=3)g=x,d=x+1,h=x+2,l(e,S,p,y,A,g,d,h,H),l(e,S,B,E,A,g,d,h,X);else for(v=Math.max(0,T.start),z=Math.min(p.count,T.start+T.count),G=v,M=z;G<M;G+=3)g=G,d=G+1,h=G+2,l(e,c,p,y,A,g,d,h,H),l(e,c,B,E,A,g,d,h,X);return{positionAttribute:p,normalAttribute:B,morphedPositionAttribute:new Float32BufferAttribute(H,3),morphedNormalAttribute:new Float32BufferAttribute(X,3)}}export{computeTangents,mergeBufferGeometries,mergeBufferAttributes,interleaveAttributes,estimateBytesUsed,mergeVertices,toTrianglesDrawMode,computeMorphedAttributes};