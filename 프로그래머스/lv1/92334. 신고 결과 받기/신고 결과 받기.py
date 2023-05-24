def solution(id_list, report, k):
    report_cnt = {i: 0 for i in id_list}
    answer = [0] * len(id_list)
    id_list = {id_list[i]: i for i in range(len(id_list))}
    report = set(report)
    
    for r in report:
        reporter, reported = r.split(" ")
        report_cnt[reported] += 1
        
    for r in report:
        reporter, reported = r.split(" ")
        if report_cnt[reported] >= k:
            answer[id_list[reporter]] += 1
        
    
    return answer