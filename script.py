import requests
import sqlite3
import pandas as pd
from lib import organize_response

cities = '4204608, 4204806, 4205407, 4205456, 4205902, 4206504, 4207007, 4207502, 4208104, 4208203, 4208302, 4208906, 4209102, 4209300, 4210100, 4211306, 4211900, 4212502, 4213203, 4213609, 4215000, 4215802, 4216206, 4216305, 4216503, 4216602, 4217709, 4218004, 4218202, 4219002, 4219507, 4219705, 4300604, 4301602, 4302105, 4303103, 4303905, 4304606, 4304663, 4304804, 4305108, 4305355, 4306403, 4306767, 4307609, 4307708, 4307906, 4308201, 4308607, 4309209, 4309308, 4310108, 4312401, 4313375, 4313409, 4314050, 4314100, 4314407, 4314803, 4315602, 4316808, 4316907, 4317608, 4318408, 4318507, 4318705, 4319000, 4319505, 4319901, 4320008, 4321204, 4322004, 4322400, 4323002, 5002704, 5003207, 5003702, 5008305, 5103403, 5106505, 5107602, 5107909, 5108402, 5200258, 5200308, 5201108, 5201405, 5203302, 5205497, 5206206, 5208004, 5208608, 5208806, 5212501, 5214507, 5214606, 5215231, 5215603, 5217302, 5217609, 5218805, 5219753, 5220454, 5221403, 5221858'
# cities = '1100122, 1100205, 1200401, 1300300, 1301100, 1301159, 1301852, 1301902, 1302504, 1302553, 1303403, 1303536, 1303569, 1400100, 1500107, 1500800, 1501402, 1501501, 1501709, 1502103, 1502400, 1504208, 1504422, 1505536, 1506500, 1506807, 1600303, 1600600, 1702109, 1713205, 1716109, 1718204, 1721000, 2100055, 2100204, 2101202, 2103000, 2103307, 2105104, 2105302, 2105500, 2107506, 2109452, 2109601, 2110203, 2111201, 2111300, 2112209, 2200400, 2205508, 2207702, 2211001, 2211100, 2301000, 2301901, 2303204, 2303501, 2303709, 2304004, 2304202, 2304285, 2304350, 2304954, 2305233, 2306256, 2306405, 2307106, 2307304, 2307650, 2307700, 2308005, 2308401, 2309607, 2309706, 2310209, 2310258, 2312007, 2312403, 2312908, 2313500, 2402600, 2403251, 2403608, 2404200, 2407104, 2407807, 2408003, 2408102, 2408201, 2412005, 2412203, 2501807, 2503001, 2503209, 2504009, 2504603, 2507507, 2508307, 2510808, 2511202, 2512507, 2512903, 2513703, 2600054, 2602902, 2603454, 2604106, 2606002, 2606200, 2606804, 2607208, 2607604, 2607752, 2607901, 2608750, 2609402, 2609600, 2610707, 2611101, 2612604, 2613701, 2616407, 2700300, 2700409, 2702355, 2702603, 2702900, 2704005, 2704203, 2704302, 2704708, 2706901, 2707701, 2708808, 2709202, 2800308, 2800605, 2804805, 2806701, 2900702, 2901106, 2903201, 2905701, 2906501, 2907202, 2908200, 2908507, 2908903, 2909901, 2910057, 2910727, 2910800, 2913606, 2914505, 2914802, 2916104, 2918001, 2918407, 2919207, 2921005, 2924009, 2925204, 2925303, 2926301, 2929206, 2929305, 2929503, 2930709, 2930774, 2931350, 2933208, 2933307, 3103504, 3105400, 3105608, 3106309, 3106705, 3109006, 3109303, 3110004, 3113404, 3118304, 3118601, 3119401, 3122306, 3124104, 3127701, 3129806, 3130101, 3131307, 3131703, 3131901, 3133808, 3136652, 3136702, 3137601, 3140704, 3141108, 3143302, 3143906, 3144805, 3147105, 3147907, 3148004, 3149309, 3151800, 3152501, 3154606, 3156700, 3157203, 3157807, 3158953, 3162922, 3165537, 3167202, 3168606, 3168705, 3169901, 3170107, 3170206, 3170404, 3170701, 3171204, 3201209, 3201308, 3201506, 3202405, 3203205, 3204906, 3205002, 3205101, 3205200, 3205309, 3300100, 3300209, 3300407, 3300456, 3300704, 3300803, 3301009, 3301702, 3301850, 3301900, 3302007, 3302270, 3302403, 3302502, 3302700, 3302858, 3303203, 3303302, 3303401, 3303500, 3303609, 3303906, 3304144, 3304201, 3304300, 3304524, 3304904, 3305109, 3305554, 3305752, 3305802, 3306305, 3501608, 3502507, 3502804, 3502903, 3503208, 3503307, 3503802, 3503901, 3504107, 3505500, 3505609, 3505708, 3505906, 3506003, 3506359, 3506508, 3506607, 3507001, 3507506, 3507605, 3507803, 3508405, 3508504, 3508603, 3509007, 3509205, 3509403, 3509601, 3509700, 3510401, 3510500, 3510609, 3511102, 3511508, 3512209, 3512407, 3512803, 3513009, 3513108, 3513405, 3513504, 3513603, 3513801, 3515004, 3515103, 3515707, 3516200, 3516309, 3516408, 3518305, 3518404, 3518602, 3518701, 3518800, 3519071, 3519709, 3520400, 3520509, 3521002, 3521408, 3522109, 3522208, 3522307, 3522505, 3523107, 3523404, 3523909, 3524006, 3524303, 3524402, 3524709, 3525003, 3525102, 3525201, 3525300, 3525904, 3526209, 3526407, 3526704, 3526902, 3527207, 3527306, 3528403, 3528502, 3529005, 3529401, 3530508, 3530607, 3530706, 3531100, 3531308, 3531803, 3531902, 3533403, 3534302, 3534401, 3534708, 3536505, 3537107, 3537602, 3537800, 3537909, 3538006, 3538709, 3539509, 3539806, 3540200, 3540606, 3541000, 3541406, 3543303, 3543907, 3544004, 3544103, 3545209, 3545308, 3545803, 3546702, 3546801, 3547304, 3547502, 3547601, 3547809, 3548005, 3548708, 3548807, 3548906, 3549805, 3550209, 3550407, 3550605, 3550704, 3551009, 3551504, 3551702, 3552205, 3552403, 3552502, 3552809, 3553302, 3554003, 3554102, 3554508, 3554805, 3555406, 3556206, 3556453, 3556503, 3556701, 3557006, 4100400, 4100509, 4101408, 4101507, 4101804, 4102000, 4102109, 4103701, 4104006, 4104204, 4104253, 4104808, 4105805, 4106605, 4107652, 4108304, 4108809, 4109401, 4109807, 4111258, 4111506, 4112108, 4113205, 4113700, 4114203, 4114302, 4114609, 4114807, 4115200, 4116901, 4117503, 4117909, 4118204, 4119152, 4119509, 4119905, 4122206, 4122305, 4122404, 4123501, 4125506, 4126256, 4127700, 4128104, 4201307, 4201406, 4202008, 4202107, 4202305, 4202404, 4202909, 4203204, 4203808, 4204202, 4204608, 4204806, 4205407, 4205456, 4205902, 4206504, 4207007, 4207502, 4208104, 4208203, 4208302, 4208906, 4209102, 4209300, 4210100, 4211306, 4211900, 4212502, 4213203, 4213609, 4215000, 4215802, 4216206, 4216305, 4216503, 4216602, 4217709, 4218004, 4218202, 4219002, 4219507, 4219705, 4300604, 4301602, 4302105, 4303103, 4303905, 4304606, 4304663, 4304804, 4305108, 4305355, 4306403, 4306767, 4307609, 4307708, 4307906, 4308201, 4308607, 4309209, 4309308, 4310108, 4312401, 4313375, 4313409, 4314050, 4314100, 4314407, 4314803, 4315602, 4316808, 4316907, 4317608, 4318408, 4318507, 4318705, 4319000, 4319505, 4319901, 4320008, 4321204, 4322004, 4322400, 4323002, 5002704, 5003207, 5003702, 5008305, 5103403, 5106505, 5107602, 5107909, 5108402, 5200258, 5200308, 5201108, 5201405, 5203302, 5205497, 5206206, 5208004, 5208608, 5208806, 5212501, 5214507, 5214606, 5215231, 5215603, 5217302, 5217609, 5218805, 5219753, 5220454, 5221403, 5221858'

indicators = {
    29763: 'pessoal_ocupado',
    29765: 'salario_medio_mensal_trabalhadores_formais',
    30279: 'obitos_por_mil_nascidos_vivos',
    29171: 'população_estimada',
    29168: 'densidade_demografica',
    29765: 'salario_medio_mensal_trabalhadores_formais',
    60036: 'população_ocupada',
    60037: 'percentual_população_rendimento_nominal_mensal_per_capita_de_ate_meio_salario_minimo',
    60045: 'taxa_escolarização_6_14_anos_idade',
    5908: 'matriculas_ensino_fundamental',
    5913: 'matriculas_ensino_medio',
    47001: 'pib_per_capita',
    30255: 'idh',
    60031: 'urbanização_vias_publicas',
    28120: 'total_de_veiculos',
    28122: 'automovel',
    28123: 'caminhao',
    28124: 'caminhao_trator',
    28125: 'caminhonete',
    28126: 'camioneta',
    28127: 'microonibus',
    28128: 'motocicleta',
    28129: 'motoneta',
    28130: 'onibus',
    28131: 'trator_rodas',
    28132: 'utilitario',
    28133: 'outros'
}

indicator_list = '|'.join([str(ind) for ind in indicators.keys()])

conn = sqlite3.connect("ibge_cidades.db")
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS cidades(
                "matriculas_ensino_fundamental" TEXT,
                "matriculas_ensino_medio" TEXT,
                "total_de_veiculos" TEXT,
                "automovel" TEXT,
                "caminhao" TEXT,
                "caminhao_trator" TEXT,
                "caminhonete" TEXT,
                "camioneta" TEXT,
                "microonibus" TEXT,
                "motocicleta" TEXT,
                "motoneta" TEXT,
                "onibus" TEXT,
                "trator_rodas" TEXT,
                "utilitario" TEXT,
                "outros" TEXT,
                "densidade_demografica" TEXT,
                "população_estimada" TEXT,
                "pessoal_ocupado" TEXT,
                "salario_medio_mensal_trabalhadores_formais" TEXT,
                "idh" TEXT,
                "obitos_por_mil_nascidos_vivos" TEXT,
                "pib_per_capita" TEXT,
                "urbanização_vias_publicas" TEXT,
                "população_ocupada" TEXT,
                "percentual_população_rendimento_nominal_mensal_per_capita_de_ate_meio_salario_minimo" TEXT,
                "taxa_escolarização_6_14_anos_idade" TEXT,
                "city" INTEGER PRIMARY KEY
                )''')

conn.commit()
c.close()

for city in cities.split(', '):
    URL = 'https://servicodados.ibge.gov.br/api/v1/pesquisas/indicadores/' + indicator_list + '/resultados/' + city

    r = requests.get(URL)

    _json = organize_response(indicators, r.json())
    _json['city'] = int(city)
    try:
        conn = sqlite3.connect('./ibge_cidades.db')
    except BaseException as e:
        raise e

    conn = sqlite3.connect("ibge_cidades.db")
    c = conn.cursor()

    query = 'INSERT INTO cidades VALUES(%s)' % ','.join(['?'] * len(_json))
    c.execute(query, list(_json.values()))

    conn.commit()
    c.close()
    print('ok')
