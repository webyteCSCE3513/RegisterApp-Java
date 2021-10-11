package edu.uark.registerapp.models.api;

import java.util.UUID;

public class Player extends ApiResponse{
    private UUID id;
	public UUID getId() {
		return this.id;
	}
	public Player setId(final UUID id) {
		this.id = id;
		return this;
	}

	private String lookupCode;

	public String getLookupCode() {
		return this.lookupCode;
	}

// 	public Player setCodename(final String codename) {
// 		this.codename = codename;
// 		return this;
// 	}

// 	private int count;

// 	public int getCount() {
// 		return this.count;
// 	}

// 	public Product setCount(final int count) {
// 		this.count = count;
// 		return this;
// 	}

// 	private String createdOn;

// 	public String getCreatedOn() {
// 		return this.createdOn;
// 	}

// 	public Product setCreatedOn(final String createdOn) {
// 		this.createdOn = createdOn;
// 		return this;
// 	}

// 	public Product setCreatedOn(final LocalDateTime createdOn) {
// 		this.createdOn =
// 			createdOn.format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));

// 		return this;
// 	}

// 	public Product() {
// 		super();

// 		this.count = -1;
// 		this.id = new UUID(0, 0);
// 		this.lookupCode = StringUtils.EMPTY;

// 		this.setCreatedOn(LocalDateTime.now());
// 	}

// 	public Product(final ProductEntity productEntity) {
// 		super(false);

// 		this.id = productEntity.getId();
// 		this.count = productEntity.getCount();
// 		this.lookupCode = productEntity.getLookupCode();

// 		this.setCreatedOn(productEntity.getCreatedOn());
// 	}
}
