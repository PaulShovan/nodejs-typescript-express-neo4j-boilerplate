import neo4j from "neo4j-driver";
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "sportedit"));

export const getMovie = () => {
    var session = driver.session();
    return session
      .run(
        `MATCH (movie:Movie) 
        RETURN movie LIMIT 15`)
      .then(result => {
        session.close();
        var record = result;
        return record
      })
      .catch(error => {
        session.close();
        throw error;
      });
  }