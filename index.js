import qs from 'qs';

export function usFormats(params) {
    return qs.formats(params);
}

export function useParse(params) {
    return qs.parse(params);
}

export function useStringify(params) {
    return qs.stringify();
}