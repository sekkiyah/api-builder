package sekk.apibuilder.models;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("companies")
public class Company {
  @Id
  String id;
  String affid;
  String companyName;
  String apiKey;

  public Company() {
    this.apiKey = UUID.randomUUID().toString();
  }

  public String generateApiKey() {
    setApiKey(UUID.randomUUID().toString());
    return apiKey;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getAffid() {
    return affid;
  }

  public void setAffid(String affid) {
    this.affid = affid;
  }

  public String getCompanyName() {
    return companyName;
  }

  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }

  public String getApiKey() {
    return apiKey;
  }

  public void setApiKey(String apiKey) {
    this.apiKey = apiKey;
  }

}
