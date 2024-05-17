import { RefsObjectType } from '@/parser/types';

export function mountRefs(refs: RefsObjectType){
    return Object.keys(refs).map(key => {
        const ref  = refs[key];
        const { type, ...restRefs } = ref;
        if(type){
            return `
                @${type}{${key},
                    ${(() => {
                        return Object.keys(restRefs).map(ref_key => {
                            switch(type){
                                case 'misc':
                                case 'book':
                                case 'article':
                                    // @ts-ignore
                                    const value = restRefs[ref_key];
                                    if(ref_key === 'author')
                                        return `${ref_key}={${(value as string[]).join(' and ')}}`
                                    else if(ref_key === 'edition')
                                        return `${ref_key}={${(value as number).toString().concat('st')}}`
                                    else
                                        return `${ref_key}={${value}}`
                            }
                        }).join(',\n    ')
                    })()}
                }
            `.trim().replace(/^\s{16}/gm, '');
        }

        return '';
    }).join('\n\n');
}