function hexToUint8Array(hexString: any) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map((byte: string) => parseInt(byte, 16)));
}

export function cborToBinary(cbor: string): Uint8Array {
    return hexToUint8Array(cbor);
}
