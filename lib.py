def organize_response(indicators, response):
    organized_dict = {}
    for research in response:
        indicators_description = indicators[research['id']]
        value = last_result(research['res'][0]['res'])
        organized_dict[indicators_description] = value
    return organized_dict


def last_result(input_dict):
    max_year = 0
    for year, value in input_dict.items():
        if max_year < int(year):
            response = value
    return response
