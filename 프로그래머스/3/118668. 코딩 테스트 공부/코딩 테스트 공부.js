function solution(alp, cop, problems) {
    let requiredAlp = alp;
    let requiredCop = cop;
    
    for (let i = 0; i < problems.length; i++) {
        requiredAlp = Math.max(problems[i][0], requiredAlp)
        requiredCop = Math.max(problems[i][1], requiredCop)
    }
    
    const dp = new Array(requiredAlp + 1).fill(0).map(_ => new Array(requiredCop + 1).fill(Infinity))
    dp[alp][cop] = 0
    
    for (let i = alp; i <= requiredAlp; i++) {
        for (let j = cop; j <= requiredCop; j++) {
            if (i + 1 <= requiredAlp) dp[i + 1][j] = dp[i + 1][j] >= dp[i][j] + 1 ? dp[i][j] + 1 : dp[i + 1][j]
            if (j + 1 <= requiredCop) dp[i][j + 1] = dp[i][j + 1] >= dp[i][j] + 1 ? dp[i][j] + 1 : dp[i][j + 1]
            
            for (let p = 0; p < problems.length; p++) {
                const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[p]
                if (i >= alp_req && j >= cop_req) {
                    const nextAlp = i + alp_rwd > requiredAlp ? requiredAlp : i + alp_rwd
                    const nextCop = j + cop_rwd > requiredCop ? requiredCop : j + cop_rwd
                    dp[nextAlp][nextCop] = dp[nextAlp][nextCop] > dp[i][j] + cost ? dp[i][j] + cost : dp[nextAlp][nextCop]
                }
            }
        }
    }
    return dp[requiredAlp][requiredCop]
}