declare module '@maptiler/leaflet-maptilersdk' {
    export class MaptilerLayer {
        constructor(options: { apiKey: string });
        addTo(map: L.Map): void;
    }
}
